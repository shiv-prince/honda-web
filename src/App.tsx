import { useState, type JSX } from "react";
import { MapPin, Phone, User, Building2 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

interface Branch {
  Branch: string;
  Incharge: string;
  Cre: string;
}

const branches: Branch[] = [
  {
    Branch: "Mekri Circle Branch",
    Incharge: "9379544501",
    Cre: "8792200748",
  },
  {
    Branch: "Gokula Branch",
    Incharge: "9343968425",
    Cre: "8792200837",
  },
  {
    Branch: "Kogilu Branch",
    Incharge: "9379544506",
    Cre: "9538863714",
  },
  {
    Branch: "Nagawara Branch",
    Incharge: "9606297172",
    Cre: "9379544511",
  },
  {
    Branch: "Malleshwaram Branch",
    Incharge: "7022891676",
    Cre: "8792200485",
  },
  {
    Branch: "RT Nagar Branch",
    Incharge: "9538863718",
    Cre: "8971101179",
  },
  {
    Branch: "Vidyaranyapura Branch",
    Incharge: "9379544503",
    Cre: "8150042555",
  },
  {
    Branch: "Yelahanka Branch",
    Incharge: "9379544506",
    Cre: "8050257733",
  },
];

export default function App(): JSX.Element {
  const [selected, setSelected] = useState<Branch | null>(null);

  const handleValueChange = (value: string): void => {
    setSelected(branches.find((b) => b.Branch === value) || null);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-red-50 via-white to-red-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <img
            src="./Honda_Logo.svg.png"
            alt="Honda Logo"
            className="mx-auto mb-4 h-16 object-contain"
          />
          {/* <h1 className="text-4xl font-bold text-gray-900 mb-2">Honda</h1> */}
          <p className="text-gray-600">
            Select a branch to view contact details
          </p>
        </div>

        {/* Dropdown */}
        <div className="">
          <Label className="block text-sm font-medium text-gray-700 mb-2">
            Select Branch
          </Label>
          <Select onValueChange={handleValueChange}>
            <SelectTrigger className="w-full h-12 text-lg py-5">
              <SelectValue placeholder="Select a branch" />
            </SelectTrigger>
            <SelectContent>
              {branches.map((branch) => (
                <SelectItem
                  key={branch.Branch}
                  value={branch.Branch}
                  className="text-base"
                >
                  {branch.Branch}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Branch Details Card */}
        {selected && (
          <div className="mt-4">
            <Card className="border-none shadow-xl py-0 pb-8">
              <CardHeader className="bg-linear-to-r from-red-600 to-red-700 text-white rounded-t-lg px-4 py-3 -gap-1">
                <div className="flex items-center gap-3 mb-1">
                  <MapPin className="w-6 h-6" />
                  <CardTitle className="text-2xl pb-0 mb-0 gap-0">
                    {selected.Branch}
                  </CardTitle>
                </div>
                <CardDescription className="text-red-50 mt-0 pt-0">
                  Branch Contact Information
                </CardDescription>
              </CardHeader>
              <CardContent className="px-6 space-y-4">
                {/* Incharge */}
                <Card className="border border-gray-200 hover:border-red-300 transition-colors -p-8">
                  <CardContent className="px-5 py-3">
                    <div className="flex items-center gap-4">
                      <div className="shrink-0 w-14 h-14 bg-gray-50 rounded-full flex items-center justify-center">
                        <User className="w-7 h-7 text-gray-700" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <Label className="text-base font-medium text-gray-700">
                            Branch Incharge
                          </Label>
                          {/* <Badge
                            variant="secondary"
                            className="bg-red-100 text-red-700 hover:bg-red-100 text-xs"
                          >
                            Primary
                          </Badge> */}
                        </div>
                        <a
                          href={`tel:${selected.Incharge}`}
                          className="flex items-center gap-2 text-md font-bold text-gray-900 hover:text-red-600 transition-colors"
                        >
                          <Phone className="w-5 h-5 shrink-0" />
                          <span>{selected.Incharge}</span>
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* CRE */}
                <Card className="border border-gray-200 hover:border-blue-300 transition-colors -p-8">
                  <CardContent className="px-5 py-3">
                    <div className="flex items-center gap-4">
                      <div className="shrink-0 w-14 h-14 bg-gray-50 rounded-full flex items-center justify-center">
                        <User className="w-7 h-7 text-gray-700" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <Label className="text-base font-medium text-gray-700">
                            CRE Contact
                          </Label>
                          {/* <Badge
                            variant="secondary"
                            className="bg-blue-100 text-blue-700 hover:bg-blue-100 text-xs"
                          >
                            Support
                          </Badge> */}
                        </div>
                        <a
                          href={`tel:${selected.Cre}`}
                          className="flex items-center gap-2 text-md font-bold text-gray-900 hover:text-blue-600 transition-colors"
                        >
                          <Phone className="w-5 h-5 shrink-0" />
                          <span>{selected.Cre}</span>
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Footer */}
        <div className="text-center mt-8 text-gray-500 text-sm">
          <p>© 2025 Honda. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
