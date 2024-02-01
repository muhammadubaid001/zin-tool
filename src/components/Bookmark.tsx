import { Card } from "./ui/Card";

export const Bookmark = () => {
  return (
    <div>
      <h1 className="font-HarmonyB text-gray-900 text-3xl">Your Bookmark</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-5 mt-4">
        <Card title="Edit PDF" description="Use the best online tool to edit PDFs in your browser." image="https://images.hipdf.com/images2022/icons/editPDF.svg" />
        <Card title="Crop PDF" description="Crop PDF onine to a selected area, adjust margin size swiftly." image="https://images.hipdf.com/images2022/icons/Crop-PDF.svg" />
        <Card title="Replace Text" description="The easiest way to replace text online." image="https://images.hipdf.com/images2022/icons/replace-text-pdf.svg" />
        <Card title="Rotate PDF" description="Rotate and save your PDF pages online for free." image="https://images.hipdf.com/images2022/icons/Rotate-PDF.svg" />
        {/* <Card title="Word to PDF" description="The best Wor to PDF converter online." image="https://images.hipdf.com/images2022/icons/word-pdf.svg" />
        <Card title="PPT to PDF" description="Covert Powerpoint to PDF online." image="https://images.hipdf.com/images2022/icons/PPT-PDF.svg" />
        <Card title="Excel to PDF" description="Covert JPG, PNG, BMP, GIF and TIFF images to PDF." image="https://images.hipdf.com/images2022/icons/Excel-PDF.svg" />
        <Card title="JPG to PDF" description="Convert TXT to PDF online for free." image="https://images.hipdf.com/images2022/icons/jpg-pdf.svg" /> */}
      </div>
    </div>
  );
};
