import { createSlice, createAsyncThunk , current} from "@reduxjs/toolkit";
import axios from 'axios';
export const createProduct = createAsyncThunk(
  "createProduct",
  async (data, { rejectWithValue }) => {
    try {
      console.log(data)
      const response = await axios.post("/api/admin/products/createproduct", data);
      // const result = await 
      // console.log(response.data)
      return response.data;
      
    } catch (error) {
      return rejectWithValue(error.message || "Failed to create product");
    }
  }
);

// ///getproduct
// export const getProduct = createAsyncThunk("getProduct",async(id,{rejectWithValue})=>{
//   try{
//     const response= await axios.get(`api/admin/products/${id}`);
//     return response.data;
//   }
//   catch(error){
//     return rejectWithValue(error.message|| "failed to get product")
//   }
// });
//r4ead
export const showProduct = createAsyncThunk("showProduct", async (_, { rejectWithValue })=>{
  

  try {
    const response = await axios.get("/api/admin/products/getproducts")
    const result = await response.data.products;
    console.log(result);
    return result;
  } catch (error) {
    return rejectWithValue(error);
  }

})

export const getSingleProduct = createAsyncThunk("getSingleProduct", async ( id , { rejectWithValue })=>{
  

  try {
    const response = await axios.get(`/api/admin/product/${id}`)
    const result = await response.data.product;
    console.log(result);
    return result;
  } catch (error) {
    return rejectWithValue(error);
  }

})

//delete
export const deleteProduct = createAsyncThunk("deleteProduct", async (id, { rejectWithValue })=>{
  const response = await axios.delete(`/api/admin/product/delete/${id}`)

  try {
    const result = await response.data.products.id;
    console.log(result)
    return result;
  } catch (error) {
    return rejectWithValue(error);
  }

})
//update
export const updateProduct = createAsyncThunk("updateProduct", async ( {id , data}, { rejectWithValue }) => {
  console.log(data , id);
  const response = await axios.put(
    `/api/admin/products/updateproduct/${id}` , data );

  try {
    const result = await response.data;

    
    return result;
  } catch (error) {
    return rejectWithValue(error);
  }
})

const productDetail = createSlice({
  name: "ProductDetail",
  initialState: {
    // products: localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")): {},
    products: [],
    loading: false,
    error: null,
    searchData:[],
    product:{},
  },
  reducers: {
    searchProduct: (state, action) => {
      console.log(action.payload);
      state.searchData = action.payload;
    },
    clearError(state) {
      state.error = null;
  },
  clearMessage(state) { // Add clearMessage action
      state.message = null;
  },
  }, // No need for any reducers here, use only createAsyncThunk
  extraReducers: (builder) => {
    builder
      .addCase(createProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        console.log(action.payload.data)
        state.loading = false;
        state.products = action.payload.data;
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(showProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(showProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products= action.payload;
        console.log(action.payload);
      })
      .addCase(showProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = localStorage.setItem("products" , JSON.stringify(action.payload));
      })
      .addCase(getSingleProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSingleProduct.fulfilled, (state, action) => {
        state.loading = false;
        console.log(action.payload);
        state.product = action.payload;
      })
      .addCase(getSingleProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = localStorage.setItem("products" , JSON.stringify(action.payload));
      })

      .addCase(deleteProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.loading = false;
        const {id} = action.payload;
        console.log(id);
        if(id){
          state.products= state.products.filter((ele)=> ele.id !== id)
        }
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload
      console.log(state.products);
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

  },
});
export const { clearError, clearMessage } = productDetail.actions;


export default productDetail.reducer;
export const { searchProduct } = productDetail.actions;

