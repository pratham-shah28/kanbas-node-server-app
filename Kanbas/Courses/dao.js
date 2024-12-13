import Database from "../Database/index.js";
import model from "./model.js";
import enrollmentModel from "../Enrollments/model.js";
// Use a different alias
// export function deleteCourse(courseId) {
//   const { courses, enrollments } = Database;
//   Database.courses = courses.filter((course) => course._id !== courseId);
//   Database.enrollments = enrollments.filter(
//     (enrollment) => enrollment.course !== courseId
//   );
// }


export function deleteCourse(courseId) {
  return model.deleteOne({ _id: courseId });
 }
 

export function findAllCourses() {
  return model.find();
}
export async function findCoursesForEnrolledUser(userId) {
  try {
    const enrollments = await enrollmentModel.find({ user:userId });
    //console.log(enrollments)
    // Extract course IDs from the enrollments
    const courseIds = enrollments.map(enrollment => enrollment.course);

    // Fetch courses corresponding to the course IDs
    return model.find({
      _id: { $in: courseIds },
    });
  } catch (error) {
    console.error("Error fetching courses for enrolled user:", error);
    throw error; // Optionally throw or handle error as needed
  }
}
export function createCourse(course) {
  delete course._id;
  return model.create(course);
}
export function updateCourse(courseId, courseUpdates) {
  return model.updateOne({ _id: courseId }, { $set: courseUpdates });
  // const { courses } = Database;
  // const course = courses.find((course) => course._id === courseId);
  // Object.assign(course, courseUpdates);
  // return course;
 }
 