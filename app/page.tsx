
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import Image from "next/image";
const Home = () => {
  return (
    <>
      {/* Chat container */}
      <div className="mx-auto w-full md:w-3xl 2xl:w-4xl flex flex-col gap-10">
        {/* Message */}
        <div className="w-full">
          <div className="h-92 overflow-y-auto border  p-3 space-y-2 w-full">
            <div className="my-5 ">
              <div className="font-medium text-center flex gap-2 justify-center">
                {" "}
                <Image src="logo.svg" width={25} height={25} alt="" />
                <h3 className="text-2xl font-medium">Hi ! This is EchoGPT </h3>
              </div>
              <p className=" text-center">How can i help you?</p>
            </div>
          </div>
        </div>

        {/* Input field */}
        <div className=" border-t relative ">
          <Textarea
            className="w-full resize-none rounded-md border "
            placeholder="Ask me anything..."
            rows={1}
            style={{ fontSize: "16px" }}
          />
          <Send className="absolute bottom-4 right-4" />
        </div>
        <div>
          <p className="text-center">Generated by AI</p>
        </div>
      </div>
    </>
  );
};

export default Home;
