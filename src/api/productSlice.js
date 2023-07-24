import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productSlice = createApi({
    reducerPath: "attendanceManagementSystem",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
    endpoints: (builder) => ({
        // product: builder.query({
        //     query: () => ({
        //         url: '/product',
        //         method: 'GET',
        //         // body: credentials,
        //     }),
        // }),
        getAllProducts: builder.query({
            query: () => `/products`,
        }),
        // getAllStudentBySemesterAndDivision: builder.query({
        //     query: ({ division, semester }) => `/admin/manageStudent/get/${division}/${semester}`,
        // }),
     }),
})

export const {useGetAllProductsQuery} = productSlice