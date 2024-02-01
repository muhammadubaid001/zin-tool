import { Card } from "../ui/Card"

export const Feature = () => {
    return (
        <div className="mt-16 relative">
          <h1 className="font-HarmonyB text-gray-900 text-3xl">
            Convert to PDF
          </h1>
          <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-5 mt-5 ">
            <Card
              title="Word to PDF"
              description="The best Wor to PDF converter online."
              image="https://images.hipdf.com/images2022/icons/word-pdf.svg"
            />
            <Card
              title="PPT to PDF"
              description="Covert Powerpoint to PDF online."
              image="https://images.hipdf.com/images2022/icons/PPT-PDF.svg"
            />
            <Card
              title="Excel to PDF"
              description="Covert JPG, PNG, BMP, GIF and TIFF images to PDF."
              image="https://images.hipdf.com/images2022/icons/Excel-PDF.svg"
            />
            <Card
              title="JPG to PDF"
              description="Convert TXT to PDF online for free."
              image="https://images.hipdf.com/images2022/icons/jpg-pdf.svg"
            />
            <Card
              title="JPG to PDF"
              description="Convert TXT to PDF online for free."
              image="https://images.hipdf.com/images2022/icons/PDF-TXT.svg"
            />
           
          </div>
        </div>
    )
}