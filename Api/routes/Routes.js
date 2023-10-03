var router = require("express").Router();
const {InsertCoursecategories, GetCoursecategoriesByCourseId,GetAllCoursecategories,UpdateCoursecategories,DeleteCoursecategories} = require("../controller/CourseCatecontroller");
const {InsertProgramcategories, GetProgramcategoriesByProgramId,GetAllProgramcategories,UpdateProgramcategories,DeleteProgramcategories} = require("../controller/ProgramCatecontroller");
const {InsertCourses, GetCourseByCourseId,GetAllCourses,UpdateCourses,DeleteCourses} = require("../controller/Coursecontroller");
const {InsertProgram, GetProgramByProgramId,GetAllProgram,UpdateProgram, DeleteProgram} = require("../controller/Programcontroller");

//getAllCourseCategories
router.route("/api/v1/coursecategories").post(InsertCoursecategories);
router.route("/api/v1/coursecategories/:courseId").get(GetCoursecategoriesByCourseId);
router.route("/api/v1/coursecategories").get(GetAllCoursecategories);
router.route("/api/v1/coursecategories").put(UpdateCoursecategories);
router.route("/api/v1/coursecategories").delete(DeleteCoursecategories);


//getAllProductCategories
router.route("/api/v1/productcategories").post(InsertProgramcategories);
router.route("/api/v1/productcategories/{{productcategoryId}}").get(GetProgramcategoriesByProgramId);
router.route("/api/v1/productcategories").get(GetAllProgramcategories);
router.route("/api/v1/productcategories").put(UpdateProgramcategories);
router.route("/api/v1/productcategories").delete(DeleteProgramcategories);


//getAllCourse
router.route("/api/v1/courses").post(InsertCourses);
router.route("/api/v1/courses/:courseId").get( GetCourseByCourseId);
router.route("/api/v1/courses/coursecategories/:course").get(GetAllCourses);
router.route("/api/v1/courses").put(UpdateCourses);
router.route("/api/v1/courses").delete(DeleteCourses);

//getAllProduct
router.route("/api/v1/products").post(InsertProgram);
router.route("/api/v1/products/{{productId}}").get(GetProgramByProgramId);
router.route("/api/v1/products/productcategories/{{productcategoryId}}").get(GetAllProgram);
router.route("/api/v1/products").put(UpdateProgram);
router.route("/api/v1/products").delete(DeleteProgram);



module.exports = router;




