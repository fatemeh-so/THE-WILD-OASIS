import supabase from "../../supabase";

async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.error(error);
    throw new Error("there is an error in get cabins api")
  }
  return data;
}

export default getCabins;
