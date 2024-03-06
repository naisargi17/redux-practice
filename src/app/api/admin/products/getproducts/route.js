import { NextResponse } from "next/server";
import Product from "@/models/productModel";
import { connect } from "@/dbConfig/dbConfig";

connect();

export async function GET() {
    try {

        const products = await Product.find();

        return NextResponse.json({
            success: true,
            products
        });

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}