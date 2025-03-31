import { useState } from 'react';
import { Checkbox, Text, UnstyledButton } from '@mantine/core';

export function CheckboxCard() {
  const [value, onChange] = useState(true);

  return (
    <UnstyledButton onClick={() => onChange(!value)} style={{
        display: 'flex',
        width: '100%',
        border: '1px solid light-dark(var(--mantine-color-gray-3), var(--mantine-color-dark-8))',
        borderRadius: 'var(--mantine-radius-sm)',
        padding: 'var(--mantine-spacing-lg)',
        backgroundColor: value ? 'light-dark(var(--mantine-color-primary-light), var(--mantine-color-dark-8))' : 'light-dark(var(--mantine-color-white), var(--mantine-color-dark-8))'
      }}>
      <Checkbox
        checked={value}
        onChange={() => {}}
        tabIndex={-1}
        size="md"
        mr="xl"
        styles={{ input: { cursor: 'pointer' } }}
        aria-hidden
      />

      <div>
        <Text fw={500} mb={7} lh={1}>
          @mantine/core
        </Text>
        <Text fz="sm" c="dimmed">
          Core components library: inputs, buttons, overlays, etc.
        </Text>
      </div>
    </UnstyledButton>
  );
}