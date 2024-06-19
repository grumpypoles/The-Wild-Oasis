import { supabaseUrl } from "./supabase";

import supabase from "./supabase.js";

export async function signup({ fullName, email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        avatar: "",
      },
    },
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return data;
}

export const getCurrentUser = async () => {
  const { data: session, error: sessionError } =
    await supabase.auth.getSession();

  if (sessionError) throw new Error("Login error", { cause: sessionError });
  if (!session?.session) return null;

  const { data: user, error: userError } = await supabase.auth.getUser();

  if (userError) throw new Error("Login error", { cause: userError });

  return user?.user;
};

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}

export async function updateCurrentUser({ password, fullName, avatar }) {
  //1. Update password or fullName

  let updateData;
  if (password) updateData = { password };
  if (fullName) updateData = { data: { fullName } };

  const { data, error } = await supabase.auth.updateUser(updateData);
  if (error) throw new Error(error.message);
  if(!avatar) return data

  //2. Upload the avatra image

  const fileName = `avatar-${data.user.id}-${Math.random()}`
  const {error: storageError }=  await supabase.storage.from('avatars').upload(fileName,avatar)
  if (storageError) throw new Error(storageError.message);

  //3. Upadate avatar in the user

  const {data: updatedUser, error: error2 } = supabase.auth.updateUser({
    data:{
      avatar: `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}`
    }
  })
  if (error2) throw new Error(error2.message);
  return updatedUser
}
