from tkinter import Tk, messagebox

# Define your text list
text_list = [
    "assets",
    "bigger",
    "blur1",
    "blur2",
    "blur3",
    "blur4",
    "border",
    "car",
    "cleanglass",
    "curtain",
    "done",
    "exit",
    "flip",
    "floor",
    "layers",
    "logo",
    "mirror",
    "mirrorvisible",
    "mirrorsmooth",
    "motionblur",
    "pathtoselection",
    "remove",
    "save",
    "shadow",
    "shadow0",
    "shadow00",
    "shadow45",
    "shadow90",
    "showhide",
    "showhideoriginal",
    "smaller",
    "winnew",
    "winselect",
    "wiredraw",
    "wireextract"
]

# Create a function to show the message box
def show_list():
    message = "\n".join(text_list)  # Join list items with newlines for better readability
    messagebox.showinfo(title="Available Options", message=message)

# Create the main window (optional, can be removed if not needed)
# root = Tk()
# root.title("Text List UI")

# Call the function to show the message box
show_list()

# If using the main window, start the event loop
# root.mainloop()  # Uncomment this line if you created the main window
