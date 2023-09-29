var router = require("express").Router();
const {InsertCoursecategories, GetCoursecategoriesByCourseId,GetAllCoursecategories,UpdateCoursecategories,DeleteCoursecategories} = require("../controller/CourseCatecontroller");
const {InsertProductcategories, GetProductcategoriesByProductId,GetAllProductcategories,UpdateProductcategories,DeleteProductcategories} = require("../controller/ProductCatecontroller");
const {InsertCourses, GetCourseByCourseId,GetAllCourses,UpdateCourses,DeleteCourses} = require("../controller/Coursecontroller");
const {InsertProduct, GetProductByProductId,GetAllProduct,UpdateProduct, DeleteProduct} = require("../controller/Productcontroller");

//getAllCourseCategories
router.route("/api/v1/coursecategories").post(InsertCoursecategories);
router.route("/api/v1/coursecategories/:courseId").get(GetCoursecategoriesByCourseId);
router.route("/api/v1/coursecategories").get(GetAllCoursecategories);
router.route("/api/v1/coursecategories").put(UpdateCoursecategories);
router.route("/api/v1/coursecategories").delete(DeleteCoursecategories);


//getAllProductCategories
router.route("/api/v1/productcategories").post(InsertProductcategories);
router.route("/api/v1/productcategories/{{productcategoryId}}").get(GetProductcategoriesByProductId);
router.route("/api/v1/productcategories").get(GetAllProductcategories);
router.route("/api/v1/productcategories").put(UpdateProductcategories);
router.route("/api/v1/productcategories").delete(DeleteProductcategories);


//getAllCourse
router.route("/api/v1/courses").post(InsertCourses);
router.route("/api/v1/courses/{{courseId}}").get( GetCourseByCourseId);
router.route("/api/v1/courses/coursecategories/{{coursecategoryId}}").get(GetAllCourses);
router.route("/api/v1/courses").put(UpdateCourses);
router.route("/api/v1/courses").delete(DeleteCourses);

//getAllProduct
router.route("/api/v1/products").post(InsertProduct);
router.route("/api/v1/products/{{productId}}").get(GetProductByProductId);
router.route("/api/v1/products/productcategories/{{productcategoryId}}").get(GetAllProduct);
router.route("/api/v1/products").put(UpdateProduct);
router.route("/api/v1/products").delete(DeleteProduct);



module.exports = router;




