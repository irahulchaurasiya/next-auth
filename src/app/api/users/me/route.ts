/* eslint-disable @typescript-eslint/no-explicit-any */

import {connect} from '@/dbConfig/dbconfig';
import User from '@/models/userModel';
import {NextRequest, NextResponse} from 'next/server';
import { getDataFromToken } from '@/helpers/getDataFromToken';

connect();

export async function POST(request: NextRequest) {
    try {
        //extract data from token
        const userId = await getDataFromToken(request);

        const user = await User.findOne({_id : userId}).select("-password");

        // Check if there is no user
        if(!user){
            return NextResponse.json({error : "No user found"} , {status: 400})
        }

        return NextResponse.json({
            message: "User Found",
            data: user
        })

    } catch (error:any) {
        return NextResponse.json({error : error.message} , {status: 500})
        
    }
}