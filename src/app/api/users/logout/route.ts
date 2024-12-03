/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import {connect} from '@/dbConfig/dbconfig';
import {NextRequest, NextResponse} from 'next/server';

connect();

export async function GET(){
    try {
        const response = NextResponse.json({
            message :  "Logout Successfully",
            success : true
        })

        response.cookies.set('token',"", {
            httpOnly: true,
            expires: new Date(0)
        })

        return response;

    } catch (error:any) {
        return NextResponse.json({error : error.message} , {status: 500})
    }
}