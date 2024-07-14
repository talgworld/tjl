import tkinter as tk
import subprocess

# Function to run the command
def run_command(event=None):
    command = entry.get()
    output = subprocess.getoutput("action " + command)
    result_text.delete('1.0', tk.END)
    result_text.insert(tk.END, output)
    # Clear the input field after running the command
    entry.delete(0, tk.END)

# Create the main window
root = tk.Tk()
root.overrideredirect(1)  # Hide window decorations

# Set window size and background color
root.geometry("150x20")
root.configure(bg="black")

# Add border
root.configure(highlightthickness=0, highlightbackground="black")

# Keep the window on top of all other applications
root.wm_attributes("-topmost", 1)

# Create input field for the command
entry = tk.Entry(root, width=30, insertwidth=0)
entry.pack(pady=0)
entry.configure(bg="black", fg="white")
entry.bind("<Return>", run_command)  # Bind Enter key to run the command

# Create text box to display the output
result_text = tk.Text(root, height=5, width=40)
result_text.pack(pady=0)

# Move the window when clicking and dragging the black area to the right
def move_window(event):
    root.geometry(f"+{event.x_root-30}+{event.y_root}")
    
entry.bind("<B1-Motion>", move_window)

# Start the main loop
root.mainloop()
