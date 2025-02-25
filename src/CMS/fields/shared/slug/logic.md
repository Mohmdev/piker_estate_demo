# How the slug component works as a feature

---

## 1. Reading Data from Another Field

The slug component needs to listen to a field other than itself (in this case, the title field). It accomplishes this through the following mechanism:

- **Using the `useFormFields` Hook:**  
  The component uses the hook as shown below:

   ```ts
   const targetFieldValue = useFormFields(([fields]) => { return fields[fieldToUse]?.value as string; });
   ```

  - Here, `fieldToUse` is a prop that defaults to `"title"`.
  - The hook takes a selector function that extracts the value of the target field from the form's state.
  - Because `useFormFields` subscribes to changes from any field it touches, when the title is updated, the hook returns the updated value.

- **Real-Time Data Flow:**  
  By subscribing to the target field's value, the component automatically receives updates whenever the title field changes. This enables cross-field communication—all without manually passing data around.

---

## 2. Automatic Update and Re-rendering in Real Time

The real-time update of the slug field is primarily managed by React’s state hooks and side effects:

- **Subscribing to Changes:**  
  The `useField` hook is used to manage the state of the slug field itself:

  ```ts
  const { value, setValue } = useField<string>{ path: path || field.name };
  ```

  - This sets up internal state for the slug field and makes it reactive.

- **Processing Updates with `useEffect`:**  
  A React `useEffect` hook is set up with the title field value (targetFieldValue) and a lock flag (checkboxValue) as its dependencies:

  ```typescript
  useEffect(() => {
    if (checkboxValue) {
      if (targetFieldValue) {
        const formattedSlug = formatSlug(targetFieldValue)

        if (value !== formattedSlug) setValue(formattedSlug)
      } else {
        if (value !== '') setValue('')
      }
    }
  }, [targetFieldValue, checkboxValue, setValue, value])
  ```

  - **Dependency Array:**  
    The effect listens for changes to both the `targetFieldValue` (the title) and `checkboxValue` (indicating if the slug is locked).  
    - When the **title changes**:
      - It runs the formatting function (formatSlug) to transform the title into a URL-friendly slug.
      - It then calls setValue if the formatted value differs, updating the slug field’s state.
    - This state update triggers a re-render, ensuring that the UI reflects the latest slug.

- **Lock Management:**  
  There is also a mechanism (via `dispatchFields`) to toggle whether the slug field should auto-update. This is controlled by a checkbox that gets hidden in the admin UI:
  
  ```typescript
  const handleLock = useCallback(
    (e: React.MouseEvent<Element>) => {
      e.preventDefault()
      dispatchFields({
        type: 'UPDATE',
        path: checkboxFieldPath,
        value: !checkboxValue,
      })
    },
    [checkboxValue, checkboxFieldPath, dispatchFields],
  )
  ```

  - When the field is locked (checkboxValue is **true**), auto-update is enabled.
  - Conversely, if unlocked, you might allow manual edits.

---

## 3. Translating to a Custom Thumbnail Component

The same principles can apply if you want to create a new feature such as a custom thumbnail component:

1. **Identify the Source Field:**  
   Determine which field (e.g., an "image" or "description" field) will drive the thumbnail generation.

2. **Subscribe to the Field Value:**  
   Use the `useFormFields` hook to listen for changes in that specific field, just as in the slug component:
  
   ```ts
   const sourceFieldValue = useFormFields(([fields]) => { return fields[sourceFieldName]?.value as string; });
   ```

3. **Process and Update:**  
   Use a `useEffect` hook watching for changes to sourceFieldValue similar to:

   ```typescript
   useEffect(() => {
     if (sourceFieldValue) {
       // Process the value accordingly (e.g., generate a thumbnail URL or preview)
       const generatedThumbnail = processThumbnail(sourceFieldValue)
       
       if (thumbnailValue !== generatedThumbnail) {
         setThumbnailValue(generatedThumbnail)
       }
     }
   }, [sourceFieldValue, setThumbnailValue, thumbnailValue])
   ```

4. **UI Integration:**  
   Render your thumbnail preview in the component. You can mimic the lock mechanism or any other UI behavior as needed.

---

## Summary

- **Data Sharing Across Fields:**  
  The slug component leverages `useFormFields` to access the value of the title field in real time.

- **State Updates and Rerendering:**  
  A `useEffect` responds immediately to changes in the field data, processes the new value using a formatting function, and updates the component state with `setValue`, thereby triggering a re-render.

- **Extensibility:**  
  This pattern of subscribing to one field's value and updating another is reusable. Consequently, you can develop similar real-time features (such as a thumbnail generator) by following the same pattern—reading from a designated field, processing its value, and updating another field in real time.

By understanding these key points, you can confidently extend the admin panel with additional real-time features using analogous patterns to the slug field component.
