import Database from "../Database/index.js";

export function createCourse(course) {
    const newCourse = { ...course, _id: Date.now().toString() };
    Database.courses = [...Database.courses, newCourse];
    return newCourse;
  }
  
  

  export function enrollUserInCourse(userId, courseId) {
    const { enrollments } = Database;
    enrollments.push({ _id: Date.now(), user: userId, course: courseId });
  }
  export function unenrollUserInCourse(userId, courseId) {
    const { enrollments } = Database;
    Database.enrollments = enrollments.filter(enrollment => enrollment.user !== userId || enrollment.course !== courseId);
  }
  export function findCoursesForEnrolledUser(userId) {
    const { enrollments } = Database;
    return enrollments.filter(enrollment => enrollment.user === userId);
  }
  
  export function findAllEnrollments() {
    return Database.enrollments;
  }
  
  export function findUsersForEnrolledCourse(courseId) {
    const { enrollments } = Database;
    return enrollments.filter(enrollment => enrollment.course === courseId);
  }

  export function createEnrollment(enrollment) {
    const newEnrollment = { ...enrollment, _id: Date.now().toString() };
    Database.enrollments = [...Database.enrollments, newEnrollment];
    // console.log(Database.enrollments);
    return newEnrollment;
  }
  export function removeEnrollment(enrollmentId) {
    const { enrollments } = Database;
    Database.enrollments = enrollments.filter((e) => e._id !== enrollmentId);
  }