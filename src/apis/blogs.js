import React from 'react'
import axios from 'axios';
const BACKENDURI = import.meta.env.VITE_BACKEND_URI;
export const getblogs = async() => {
       try {
        const reqUrl = `${BACKENDURI}/get-blog`
      const response = await axios.get(reqUrl)
      return response
       } catch (error) {
        console.log(error)
       }
}

export const addBlog = async({blogTitle,blogDescription,keywords}) => {
         try {
          const reqUrl = `${BACKENDURI}/create-blog`
        const response = await axios.post(reqUrl,{blogTitle,blogDescription,keywords})
        return response
         } catch (error) {
          console.log(error)
         }
}

export const deleteBlog = async(id) => {
           try {
            const reqUrl = `${BACKENDURI}/delete-blog/${id}`
          const response = await axios.delete(reqUrl)
          return response
           } catch (error) {
            console.log(error)
           }
}

export const editBlogById = async({id,blogTitle,blogDescription,keywords}) => {
             try {
              const reqUrl = `${BACKENDURI}/edit-blog/${id}`
            const response = await axios.patch(reqUrl,{blogTitle,blogDescription,keywords})
            return response
             } catch (error) {
              console.log(error)
             }
}
