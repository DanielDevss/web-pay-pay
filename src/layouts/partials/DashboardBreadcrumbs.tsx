import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Gauge } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const DashboardBreadcrumbs = () => {
    const location = useLocation();

    const pathnames = location.pathname.split("/").filter((x) => x).slice(1);

    const elements = pathnames?.map((path, key) => {
        const index = key + 1
        return {
            key,
            label: path.replace(/[-]/g, " "),
            isLast: pathnames.length === index,
            to: "/administrador/" + pathnames.slice(0, index).join("/"),
        }
    })

    return (
        <div className="px-4 py-3"> 
            <Breadcrumb>
                <BreadcrumbList>

                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link to="/administrador" className="flex items-center gap-2"><Gauge size={18} />Panel principal</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>

                    {elements?.map(item => (
                        <>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                {item.isLast ? (
                                    <span className="capitalize font-medium">{item.label}</span>
                                ) : (
                                    <BreadcrumbLink asChild>
                                        <Link className="capitalize" to={item.to}>{item.label}</Link>
                                    </BreadcrumbLink >
                                )}
                            </BreadcrumbItem>
                        </>
                    ))
                    }
                </BreadcrumbList>
            </Breadcrumb>
        </div>
    )
}

export default DashboardBreadcrumbs
