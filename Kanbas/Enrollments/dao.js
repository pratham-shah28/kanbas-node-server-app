import model from "./model.js";
export async function findCoursesForUser(userId) {
 const enrollments = await model.find({ user: userId }).populate("course");
 return enrollments.map((enrollment) => enrollment.course);
}
export async function findUsersForCourse(courseId) {
 const enrollments = await model.find({ course: courseId }).populate("user");
 return enrollments.map((enrollment) => enrollment.user);
}
// export function enrollUserInCourse(user, course) {
//  return model.create({ user, course });
// }
// export function unenrollUserFromCourse(user, course) {
//  return model.deleteOne({ user, course });
// }
export function enrollUserInCourse(userId, courseId) {
    //console.log(userId, courseId);
    const newEnrollment = { user: userId, course: courseId };
    return model.create(newEnrollment);
  }
  export function unenrollUserInCourse(userId, courseId) {
    return model.deleteOne({ user: userId, course: courseId });
  }

export function findAllEnrollments() {
    return model.find()
}
 
