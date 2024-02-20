import supabase, { supabaseUrl } from "../../supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.error(error);
    throw new Error("there is an error in get cabins api");
  }
  return data;
}

export async function createCabins(newCabin) {
  // https://imoyztcjssgbwpnmrpbk.supabase.co
  // /storage/v1/object/public/cabins-images/
  // cabin-008.jpg?t=2024-02-17T05%3A41%3A12.201Z
  // https://imoyztcjssgbwpnmrpbk.supabase.co
  // /storage/v1/object/public/cabins-images/
  // 0.6638857722646969-cabin-008.jpg

  // https://imoyztcjssgbwpnmrpbk.supabase.co
  // /storage/v1/object/public/cabins-images/
  // 0.9534164123077316-cabin-003.jpg

  const imageName = `${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );
  // console.log(newCabin);
  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabins-images/${imageName}`;
  //1 create cabin

  const { data, error } = await supabase
    .from("cabins")
    .insert([{ ...newCabin, image: imagePath }])
    .select();
  if (error) {
    console.error(error);
    throw new Error("there is an error in create cabins api");
  }

  //2 upload image
  const { error: storageError } = await supabase.storage
  .from("cabin-images")
  .upload(imageName, newCabin.image);

  if (storageError) await supabase.from("cabins").delete().eq("id", data.id);
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
