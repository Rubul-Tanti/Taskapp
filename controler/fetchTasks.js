const prisma = require("../database"); 
const ApiError = require("../middleware/error");

const fetchTasks = async (req, res) => {
  try {
    const tasks = await prisma.task.findMany({
      orderBy: { id: "desc" }
    });

    res.json({
      message: "Successfully fetched Tasks List",
      success: true,
      data: tasks,
    });

  } catch (e) {
    console.error("Fetch Tasks Error:", e);
    throw new ApiError(500, "Internal Server Error");
  }
};

module.exports = fetchTasks;
