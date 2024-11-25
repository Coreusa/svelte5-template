<script lang="ts">
  import {
    NavbarBrand,
    Nav,
    Navbar,
    NavItem,
    NavLink,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
  } from '@sveltestrap/sveltestrap';
</script>

<Navbar color="dark" dark expand="lg" class="shadow">
  <NavbarBrand href="/#">
    <img src="/images/logo.svg" width="60px" alt="logo" />
  </NavbarBrand>
  <Nav class="mx-auto" navbar>
    <NavItem>
      <NavLink href="/#">Home</NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="/#/about">Page 1</NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="/#/page">Page 2</NavLink>
    </NavItem>
    <Dropdown nav inNavbar>
      <DropdownToggle nav caret>Dropdown</DropdownToggle>
      <DropdownMenu end>
        <DropdownItem>Option 1</DropdownItem>
        <DropdownItem>Option 2</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  </Nav>
</Navbar>
