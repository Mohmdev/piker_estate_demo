// // @ts-nocheck

// import { CustomFormField } from '@/components/FormField'
// import { Button } from '@/components/ui/button'
// import { Form } from '@/components/ui/form'
// import { type ApplicationFormData, applicationSchema } from '@/lib/schemas'
// import { useCreateApplicationMutation, useGetAuthUserQuery } from '@/state/api'
// import { zodResolver } from '@hookform/resolvers/zod'
// import { useAuth } from '@providers/Auth'
// import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@ui/dialog'
// import React from 'react'
// import { useForm } from 'react-hook-form'

// type ApplicationModalProps = {
//   isOpen: boolean
//   onClose: () => void
//   data: any
// }

// export const ApplicationModal: React.FC<ApplicationModalProps> = (props) => {
//   const { isOpen, onClose, data } = props
//   const [createApplication] = useCreateApplicationMutation()
//   const { user } = useAuth()

//   const form = useForm<ApplicationFormData>({
//     resolver: zodResolver(applicationSchema),
//     defaultValues: {
//       name: '',
//       email: '',
//       phoneNumber: '',
//       message: '',
//     },
//   })

//   const onSubmit = async (data: ApplicationFormData) => {
//     if (
//       !user
//       //  || authUser.userRole !== 'tenant'
//     ) {
//       console.error(
//         'You must be logged in as a tenant to submit an application',
//       )
//       return
//     }

//     await createApplication({
//       ...data,
//       applicationDate: new Date().toISOString(),
//       status: 'Pending',
//       propertyId: propertyId,
//       tenantCognitoId: user.cognitoInfo.userId,
//     })
//     onClose()
//   }

//   return (
//     <Dialog open={isOpen} onOpenChange={onClose}>
//       <DialogContent className="bg-white">
//         <DialogHeader className="mb-4">
//           <DialogTitle>Submit Application for this Property</DialogTitle>
//         </DialogHeader>
//         <Form {...form}>
//           <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
//             <CustomFormField
//               name="name"
//               label="Name"
//               type="text"
//               placeholder="Enter your full name"
//             />
//             <CustomFormField
//               name="email"
//               label="Email"
//               type="email"
//               placeholder="Enter your email address"
//             />
//             <CustomFormField
//               name="phoneNumber"
//               label="Phone Number"
//               type="text"
//               placeholder="Enter your phone number"
//             />
//             <CustomFormField
//               name="message"
//               label="Message (Optional)"
//               type="textarea"
//               placeholder="Enter any additional information"
//             />
//             <Button type="submit" className="bg-primary-700 text-white w-full">
//               Submit Application
//             </Button>
//           </form>
//         </Form>
//       </DialogContent>
//     </Dialog>
//   )
// }
