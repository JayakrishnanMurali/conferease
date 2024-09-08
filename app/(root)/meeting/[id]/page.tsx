const Meeting = ({ params }: { params: { id: string } }) => {
  return <div>Meeting Room Number: {params.id}</div>;
};

export default Meeting;
