export const CONTACT_COLUMNS = [
  {
    name: "Name",
    selector: (row: any) => row.name,
    sortable: true,
  },
  {
    name: "Email",
    selector: (row: any) => row.email,
    sortable: true,
  },
  {
    name: "Phone",
    selector: (row: any) => row.phone,
    sortable: true,
  },
  {
    name: "Address",
    selector: (row: any) => row.address,
    sortable: true,
  },
  {
    name: "City",
    selector: (row: any) => row.city,
    sortable: true,
  },
  // {
  //   name: "Date Created",
  //   selector: (row: any) => row.createdA,
  //   sortable: true,
  // },
];
