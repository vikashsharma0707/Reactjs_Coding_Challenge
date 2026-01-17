import { createSlice } from "@reduxjs/toolkit";



const todoSlice = createSlice({
    name:"mytodo",
    initialState:{
        todo:[]
    },

    reducers:{
        addData:(state,actions)=>{
            state.todo.push(actions.payload)
        },

        deleteData:(state,actions)=>{
            state.todo =state.todo.filter(item=>item.id!==actions.payload);

        },

        workComplete:(state,actions)=>{
            for( var i=0;i<state.todo.length;i++){
                if(state.todo[i].id==actions.payload){
                    state.todo[i].complete=true;
                }
            }
        },

         workInComplete:(state,actions)=>{
            for( var i=0;i<state.todo.length;i++){
                if(state.todo[i].id==actions.payload){
                    state.todo[i].complete=false;
                }
            }
        },


        editTask:(state,actions)=>{
            for(var i=0;i<state.todo.length;i++){
                if(state.todo[i].id==actions.payload.id){
                    state.todo[i].Task=actions.payload.Task
                }
            }

        }
    }

})

export const {addData,deleteData,workComplete,workInComplete,editTask} =todoSlice.actions;
export default todoSlice.reducer;