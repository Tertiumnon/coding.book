# Your Cloud Firestore database has insecure rules

You can edit Firebase rules there: `Firebase / Cloud Firestore / Rules`.

Use for the first time for development (full access for all users):

```text
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
```

[Power up a security for you firebase instance](https://firebase.google.com/docs/rules/basics) for public instances.

If not, you'll receive an email from Google `[Firebase] Your Cloud Firestore database has insecure rules`.
