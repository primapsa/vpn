import axios from 'axios';

import { base_api_url } from '@/constants';
import {ApiResponse} from "@/types";
const LIMIT = 3;
const axiosInstance = axios.create({
    baseURL: base_api_url,
});

export const API = {
    fetchGenres(limit:number = LIMIT) {
        return axiosInstance.get<ApiResponse>(`/api/?results=${limit}`);
    },
};
