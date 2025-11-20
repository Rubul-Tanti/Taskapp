const prisma = require("../database/index");
const { ApiError } = require("../middleware/error");

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedTask = await prisma.task.delete({
      where: { id: Number(id) },
    });

    res.status(200).json({
      success: true,
      message: "successfully deleted Task",
    });
  } catch (e) {
    console.error(e);

    if (e.code === "P2025") {
      throw new ApiError(404, "Task not found");
    }

    throw new ApiError(500, "Internal Server Error");
  }
};

module.exports = deleteTask;
