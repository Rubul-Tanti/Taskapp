const prisma = require("../database/index");
const { ApiError } = require("../middleware/error");

const createTask = async (req, res) => {
  try {
    const { title, description } = req.body;

    const newTask = await prisma.task.create({
      data: {
        title,
        description,
      },
    });

    res.status(201).json({
      success: true,
      message: "Task created successfully",
      data: newTask,
    });
  } catch (e) {
    console.error(e);
    throw new ApiError(500, "Internal Server Error");
  }
};

module.exports = createTask;
