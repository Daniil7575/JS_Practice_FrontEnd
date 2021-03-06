import http from "@/netClient/config";

export async function fetchTodoList(){
    try{
        const response = await http.get("/todos",
        {
            headers: {
                "Content-Type": "application/json",
                "token": localStorage.accessToken
            }
        }
        );
        return response.data?.todos || [];
    }
    catch(error){
        console.error({error})
        throw error;
    }
}

export async function createTodo({title}){
    try{
        const response = await http.post("/todos", {
            title
        })
        return response?.data ?? {}
    }
    catch(error) {
        console.error({error});
    }
}

export async function patchTodo({id, isCompleted}){
    try{
        const response = await http.patch("/todos/" + id, {
            isCompleted
        })
        return response?.data ?? {}
    }
    catch(error) {
        console.error({error})
    }
}

export async function deleteTodo({id}){
    try{
        const response = await http.delete("/todos/" + id)
        return response?.data ?? {}
    }
    catch(error){
        console.error({error})
    }
}
