import DesktopHeader from "@/components/header/DesktopHeader";
import MobileHeader from "@/components/header/MobileHeader";

/**
 * Site header: composes the desktop version (lg:block) and the
 * mobile/tablet version (lg:hidden), each with its own scroll logic.
 */
export default function Navbar() {
  return (
    <>
      <DesktopHeader />
      <MobileHeader />
    </>
  );
}
