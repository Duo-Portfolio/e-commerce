

export async function GET(req, {params}) {
    try {

        const {productId} = params;

        // Define the path to the JSON file
        const filePath = path.join(process.cwd(), 'data', 'products.json');

        // Read the file asynchronously
        const fileData = await fs.readFile(filePath, 'utf-8');

        // Parse the JSON data
        const products = JSON.parse(fileData);




        // Success response
        return NextResponse.json(products.products.find(p => p.id == productId), { status: 200 });

    } catch (error) {
        console.error("Error reading JSON file: ", error);

        // Handle file or JSON parsing errors
        return NextResponse.json({ message: "An error occurred", error: error.message }, { status: 500 });
    }
}
