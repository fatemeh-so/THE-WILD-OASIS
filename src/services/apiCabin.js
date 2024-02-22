import supabase, { supabaseUrl } from "../../supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.error(error);
    throw new Error("there is an error in get cabins api");
  }
  return data;
}

export async function createCabins(newCabin, id) {


  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);

  const imageName = `${newCabin.image.name}`.replaceAll("/", "");

  // console.log(newCabin);
  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabins-images/${imageName}`;
  //1 create / edit cabin
  let query = supabase.from("cabins");

  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]).select().single();

  if (id) query = query.update({ ...newCabin, image: imagePath }).eq("id", id);

  const { data, error } = await query;

  if (error) {
    console.error(error);
    throw new Error("there is an error in create cabins api");
  }
  //2 upload image
  if (hasImagePath) return data;

  const { error: storageError } = await supabase.storage
    .from("cabins-images")
    .upload(imageName, newCabin.image);

  // if (storageError) await supabase.from("cabins").delete().eq("id", data.id);
  return data;
}

export async function deleteCabin(id) {
  const { error, data } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("there is an error in delete cabins api");
  }

  return data;
}
