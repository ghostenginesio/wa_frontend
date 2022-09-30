import { PasswordInput } from "@mantine/core";
import { IconEyeCheck, IconEyeOff } from "@tabler/icons";

function PasswordField({ defaultValue, label }) {
  return (
    <PasswordInput
      label={label}
      placeholder="Change visibility toggle icon"
      defaultValue={defaultValue}
      visibilityToggleIcon={({ reveal, size }) =>
        reveal ? <IconEyeOff size={size} /> : <IconEyeCheck size={size} />
      }
    />
  );
}
