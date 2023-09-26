var router = require("express").Router();
const {InsertCoursecategories, GetCoursecategoriesByCourseId,GetAllCoursecategories,UpdateCoursecategories,DeleteCoursecategories} = require("../controller/CourseCatecontroller")

// getAllCourseCategories
router.route("/api/v1/coursecategories").post(InsertCoursecategories);
router.route("/api/v1/coursecategories/{{coursecategoryId}}").get(GetCoursecategoriesByCourseId);
router.route("/api/v1/coursecategories").get(GetAllCoursecategories);
router.route("/api/v1/coursecategories").put(UpdateCoursecategories);
router.route("/api/v1/coursecategories").delete(DeleteCoursecategories);


//getAllProductCategories
router.route("/api/v1/productcategories").post(getAllProductCategories);
router.route("/api/v1/productcategories/{{productcategoryId}}").get(getAllProductCategories);
router.route("/api/v1/productcategories").get(getAllProductCategories);
router.route("/api/v1/productcategories").put(getAllProductCategories);
router.route("/api/v1/productcategories").delete(getAllProductCategories);


//getAllCourse
router.route("/api/v1/courses").post(getAllCourse);
router.route("/api/v1/courses/{{courseId}}").get(getAllCourse);
router.route("/api/v1/courses/coursecategories/{{coursecategoryId}}").get(getAllCourse);
router.route("/api/v1/courses").put(getAllCourse);
router.route("/api/v1/courses").delete(getAllCourse);

//getAllProduct
router.route("/api/v1/products").post(getAllProduct);
router.route("/api/v1/products/{{productId}}").get(getAllProduct);
router.route("/api/v1/products/productcategories/{{productcategoryId}}").get(getAllProduct);
router.route("/api/v1/products").put(getAllProduct);
router.route("/api/v1/products").delete(getAllProduct);



module.exports = router;




