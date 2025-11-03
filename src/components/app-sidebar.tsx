import * as React from "react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import BrandLogo from "./Layout/BrandLogo"
import { ModeToggle } from "./Layout/ModeToggle"
import { Link, useNavigate } from "react-router"
import { getSidebarItems } from "@/utils/getSidebarItems"
import { useGetMeQuery } from "@/redux/features/user/user.api"
import { authApi, useLogoutMutation } from "@/redux/features/auth/auth.api"
import { useAppDispatch } from "@/redux/hook"
import { toast } from "sonner"
import { handleApiError } from "@/utils/apiErrorHandler"
import { Button } from "./ui/button"
import { LogOut } from "lucide-react"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { data: userInfo } = useGetMeQuery(undefined);
  const [logout] = useLogoutMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const data = {
    navMain: getSidebarItems(userInfo?.data?.role)
  };

  const handleLogout = async () => {
    const toastId = toast.loading("Logout...");
    try {
      const result = await logout(undefined);
      if (result?.data?.success) {
        dispatch(authApi.util.resetApiState());
        toast.success('Logout successfully', { id: toastId });
        navigate("/");
      }
    } catch (error) {
      toast.dismiss(toastId);
      handleApiError(error, toastId as string)
    }
  };

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <div className="flex justify-between items-center p-3">
          <BrandLogo />
          <ModeToggle />
        </div>
      </SidebarHeader>
      <SidebarContent className="gap-0">
        {/* We create a SidebarGroup for each parent. */}
        <div className="flex flex-col p-4 justify-between h-full">
          {data.navMain.map((item) => (
            <SidebarGroup key={item.title}>
              <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {item.items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild className="text-base font-medium">
                        <Link to={item.url}>{item.title}</Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))}
          <div>
            <Button onClick={handleLogout} variant={"destructive"} className="w-full mt-5 cursor-pointer">
              Log Out <LogOut />
            </Button>
          </div>
        </div>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
