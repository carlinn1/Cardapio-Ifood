import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios"
import { FoodData } from '../interface/FoodData';

const API_URL = 'http://localhost:8080';

interface UpdateData {
    id: number;
    data: FoodData;
}

const updateData = async ({ id, data }: UpdateData): AxiosPromise<any> => {
    const response = axios.put(API_URL + '/foods/' + id, data);
    return response;
}

export function useFoodDataUpdate(){
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: updateData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries(['food-data'])
        }
    })

    return mutate;
}
