<template>
  
  <div
    class="h-screen max-w-[15%] min-w-[15%]  border-r-2 border-gray-300 flex flex-col text-lg   fixed  left-0 right-0">
    <router-link to="/Courses"><div :class="CoursescolorClass">
      Courses
    </div></router-link>
    <router-link to="/Programs"><div :class="ProgramscolorClass">
      Programs
    </div></router-link>
    <router-link to="/Coursecategories"> <div :class="CourseCatecolorClass">
      Course Categories
    </div></router-link>
    <router-link to="/Programcategories">  <div :class="ProgramCatecolorClass">
      Program Categories
    </div></router-link>

  </div>
</template>


<script>
export default {
  name: 'Drawer',
  props: {
    CoursescolorClass: String,
    ProgramscolorClass:String,
    CourseCatecolorClass:String,
    ProgramCatecolorClass:String, // Prop to receive the color name
  },


  computed: {
    CoursescolorClass() {
      // Use conditional classes based on the prop value
      return {
        'flex items-stretch  min-h-[7%] p-3 border-b-2 border-gray-300 text-black text-medium': this.CoursescolorClass === 'black',
        'flex items-stretch  min-h-[7%] p-3 border-b-2 border-gray-300 text-blue-500 font-bold': this.CoursescolorClass === 'blue',
      };
    },
    ProgramscolorClass() {
      // Use conditional classes based on the prop value
      return {
        'flex items-stretch  min-h-[7%] p-3 border-b-2 border-gray-300 text-black text-medium': this.ProgramscolorClass === 'black',
        'flex items-stretch  min-h-[7%] p-3 border-b-2 border-gray-300 text-blue-500 font-bold': this.ProgramscolorClass === 'blue',
      };
    },
    CourseCatecolorClass() {
      // Use conditional classes based on the prop value
      return {
        'flex items-stretch  min-h-[7%] p-3 border-b-2 border-gray-300 text-black text-medium': this.CourseCatecolorClass === 'black',
        'flex items-stretch  min-h-[7%] p-3 border-b-2 border-gray-300 text-blue-500 font-bold': this.CourseCatecolorClass === 'blue',
      };
    },
    ProgramCatecolorClass() {
      // Use conditional classes based on the prop value
      return {
        'flex items-stretch  min-h-[7%] p-3 border-b-2 border-gray-300 text-black text-medium': this.ProgramCatecolorClass === 'black',
        'flex items-stretch  min-h-[7%] p-3 border-b-2 border-gray-300 text-blue-500 font-bold': this.ProgramCatecolorClass === 'blue',
      };
    },
  },

}
</script>