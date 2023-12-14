import CreateUserForm from '@/components/ui/auth/RegisterForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Register - Jornal Life',
};

export default function Page() {

  return (
    <CreateUserForm />
  );
}