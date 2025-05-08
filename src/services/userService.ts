import { supabase } from "../db/supabase";
import { User } from "../db/types";
import logger from "../lib/logger";

export const createUser = async (email: string): Promise<User | null> => {
  try {
    const { data, error } = await supabase
      .from("users")
      .insert([{ email }])
      .select()
      .single();

    if (error) {
      logger.error("Error creating user:", error);
      return null;
    }

    return data;
  } catch (error) {
    logger.error("Error in createUser:", error);
    return null;
  }
};
