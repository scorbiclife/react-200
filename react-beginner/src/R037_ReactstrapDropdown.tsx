import { useState } from "react";
import {
  ButtonDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";

function R037_ReactstrapDropdown() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((open) => !open);
  };

  return (
    <ButtonDropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
      <DropdownToggle caret>Button Dropdown</DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>Header</DropdownItem>
        <DropdownItem disabled>Disabled button</DropdownItem>
        <a href="https://example.com">
          <DropdownItem>Navigate to example.com</DropdownItem>
        </a>
        <DropdownItem onClick={() => alert("Alert from alert button")}>
          Alert button
        </DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
  );
}

export default R037_ReactstrapDropdown;
