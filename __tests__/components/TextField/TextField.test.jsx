import TextField from "@Components/TextField";
import { render } from "@testing-library/react-native";
import { useForm } from "react-hook-form";

test("renders TextField", () => {
  const TextFieldWrapper = () => {
    const { control } = useForm();
    return <TextField control={control} name="nameOrId"/>
  }
  const tree = render(
    <TextFieldWrapper />
  );
  expect(tree).toMatchSnapshot();
});
