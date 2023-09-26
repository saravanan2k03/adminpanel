var router = require("express").Router();


// getAllCourseCategories
router.route("/api/v1/coursecategories").post(getAllCourseCategories);
router.route("/api/v1/coursecategories/{{coursecategoryId}}").get(getAllCourseCategories);
router.route("/api/v1/coursecategories").get(getAllCourseCategories);
router.route("/api/v1/coursecategories").put(getAllCourseCategories);
router.route("/api/v1/coursecategories").delete(getAllCourseCategories);


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




