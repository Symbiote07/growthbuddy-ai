-- Fix security vulnerability: Remove anonymous access to chat messages
-- This ensures only authenticated users can access chat messages

-- Drop existing policies
DROP POLICY IF EXISTS "Users can view their own chat messages" ON public.chat_messages;
DROP POLICY IF EXISTS "Users can create chat messages" ON public.chat_messages;

-- Create secure policies that require authentication
CREATE POLICY "Authenticated users can view their own chat messages" 
ON public.chat_messages 
FOR SELECT 
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Authenticated users can create their own chat messages" 
ON public.chat_messages 
FOR INSERT 
TO authenticated
WITH CHECK (auth.uid() = user_id);

-- Also make user_id NOT NULL to prevent NULL user_id entries
-- First, update any existing NULL user_id records (if any)
UPDATE public.chat_messages 
SET user_id = '00000000-0000-0000-0000-000000000000'::uuid 
WHERE user_id IS NULL;

-- Then make the column NOT NULL
ALTER TABLE public.chat_messages 
ALTER COLUMN user_id SET NOT NULL;