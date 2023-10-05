<template>
    <div class="widget">
      <input type="file" ref="fileInput" @change="convertAndUpload" />
    </div>
  </template>
  
  <script>
import axios from 'axios';

  export default {
    name: 'AddCourseCategory',
    methods: {
      async convertAndUpload() {
        const fileInput = this.$refs.fileInput;
        const file = fileInput.files[0];
  
        if (file) {
            const fileName = file.name; 
            

          const reader = new FileReader();
  
          reader.onload = async () => {
            const base64String = reader.result.split(',')[1]; // Get the base64 string without the data URI prefix
  
            try {
              const response = await this.uploadFile(base64String,fileName);
  
              // Handle the response from your Node.js API
              console.log(response);
            } catch (error) {
              console.error(error);
            }
          };
  
          reader.readAsDataURL(file);
        }
      },
  
      async uploadFile(base64String,fileName) {
        // Send the base64String to your Node.js API
        const response = await axios.post('http://localhost:3000/admin//api/v1/courses', { SyllabusFiledata: base64String ,SyllabusFilename:fileName});
        console.log(response.data)
        return response.data;

      },
    },
  };
  </script>
  

  <style>
.widget{
    margin-top: 300px;
    margin-bottom: 300px;
    margin-left: 300px;
} 
</style>