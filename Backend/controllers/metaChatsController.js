const catchAsyncErrors = require("../middleware/catchAsyncErrors");

const metachats=require("../models/metaChatsModel");
const user=require("../models/usermodel");

// Create a chat
exports.createChat = catchAsyncErrors(async (req, res) => {
    const { chat_name, participants } = req.body;

    try {
        // console.log("received catname and participants");
      // Find the highest chat_id
      const highestChat = await metachats.findOne().sort({ chat_id: -1 });

    //   if(!highestChat){
    //     return res.status(201).json({message:"there is no chats "});
    //   }

      // Determine new chat_id (increment highest by 1, or set to 1 if none exists)
      const newChatId = highestChat ? highestChat.chat_id + 1 : 1;

      // Create new chat
      const newChat = await metachats.create({
        chat_id: newChatId,
        chat_name,
        participants,
      });
  
      // Update each participant in the User model by adding chat_id to their chat_ids array
      await user.updateMany(
        { email: { $in: participants } },
        { $push: { chats: newChatId } }
      );
  
      res.status(201).json({
        success: true,
        message: "Chat created successfully",
        chat: newChat,
      });
    } catch (error) {
      console.error("Error:", error);
      res.status(400).json({ error: error.message, success: false });
    }
  });


  exports.getMetaChats=catchAsyncErrors(async(req,res)=>{

    const {email}=req.body;
   try {
    // Find all chat objects where participants array contains the given email
    const meta_chat_info = await metachats.find({ participants: email }); // automatically serches in array

    if (!meta_chat_info || meta_chat_info.length === 0) {
        return res.status(404).json({
            success: false,
            message: "No chats available for this email"
        });
    }

    return res.status(200).json({
        success: true,
        message: "Chats found successfully",
        metadata: meta_chat_info
    });

} catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: error.message, success: false });
}

  });