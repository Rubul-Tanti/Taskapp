const prisma = require("../database");
const { ApiError } = require("../middleware/error");

const updateTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, description, status } = req.body;

    console.log("Incoming:", id, title, description, status);

    const updatedTask = await prisma.task.update({
      where: { id: Number(id) },
      data: {
        title,
        description,
        status,
      },
    });

    console.log("Updated Task:", updatedTask);

    return res.status(200).json({
      success: true,
      message: "Successfully updated Task",
      data: updatedTask,
    });

  } catch (e) {
    console.error(e);

    // Prisma: Record Not Found
    if (e.code === "P2025") {
      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }

    return next(new ApiError(500, "Internal Server Error"));
  }
};

module.exports = updateTask;
