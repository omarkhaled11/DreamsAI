import { supabase } from "../db/supabase";
import { Dream } from "../db/types";
import logger from "../lib/logger";

export const createDream = async (
  content: string,
  userId: string
): Promise<Dream | null> => {
  try {
    const { data, error } = await supabase
      .from("dreams")
      .insert([{ content, user_id: userId }])
      .select()
      .single();

    if (error) {
      logger.error("Error creating dream:", error);
      return null;
    }

    return data;
  } catch (error) {
    logger.error("Error in createDream:", error);
    return null;
  }
};

export const getDreamsByUser = async (userId: string): Promise<Dream[]> => {
  try {
    const { data, error } = await supabase
      .from("dreams")
      .select("*")
      .eq("user_id", userId)
      .order("created_at", { ascending: false });

    if (error) {
      logger.error("Error fetching dreams:", error);
      return [];
    }

    return data || [];
  } catch (error) {
    logger.error("Error in getDreamsByUser:", error);
    return [];
  }
};
