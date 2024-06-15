"use client"
import { useAppSelector } from "@/redux/hooks";
import { useSession } from "next-auth/react";
import Login from "@/components/admin-panel/Login";
import React from "react";

const layout = () => {

    const isLoading = useAppSelector((store) => store.loadingReducer)
    const {data: session} = useSession()

    if(!session?.user){
        return <Login />
    }

    return <div>Layout</div>
};

export default layout;