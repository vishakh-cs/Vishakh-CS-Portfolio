
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function ContactDialog() {
  const emailAddress = "Vishakhcs51@gmail.com";
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="bg-blue-500 hover:bg-blue-700 cursor-pointer text-white font-bold py-2 px-4 rounded">
          Contact
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] h-48 bg-slate-800">
        <DialogHeader className="">
          <DialogTitle >Email</DialogTitle>
          <DialogDescription >{emailAddress}</DialogDescription>
        </DialogHeader>
        <DialogFooter>
       <a href={`mailto:${emailAddress}`} className="bg-green-500 hover:bg-green-700 cursor-pointer text-white font-bold py-2 px-4 text-center rounded">
              OK
           </a>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
