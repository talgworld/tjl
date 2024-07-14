import tkinter as tk

def update_counter(event=None):
    try:
        count = int(counter_entry.get())
    except ValueError:
        count = 0
    update_counter_entry(count)

def update_counter_entry(count):
    counter_entry.delete(0, tk.END)
    counter_entry.insert(0, str(count))

def decrease_counter():
    current_value = int(counter_entry.get() or 0)
    update_counter_entry(current_value - 1)

def increase_counter():
    current_value = int(counter_entry.get() or 0)
    update_counter_entry(current_value + 1)

def move_window(event):
    root.geometry(f"200x50+{event.x_root - root.winfo_width() // 2}+{event.y_root - root.winfo_height() // 2}")

root = tk.Tk()
root.title("Errors")
root.geometry("200x50")
root.configure(bg="black")
root.overrideredirect(True)  # Hide the top bar

# Set the window to always be on top
root.attributes("-topmost", True)

# Get the screen width and height
screen_width = root.winfo_screenwidth()
screen_height = root.winfo_screenheight()

# Calculate the x and y position to center the window
x = (screen_width - 200) // 2
y = (screen_height - 50) // 2

# Set the position of the window
root.geometry(f"200x50+{x}+{y}")

# Create the counter entry
counter_entry = tk.Entry(root, bg="black", fg="white", font=("Arial", 20), justify="center", bd=0)
counter_entry.place(relx=0.5, rely=0.5, anchor=tk.CENTER)
counter_entry.bind("<Return>", update_counter)

# Create the buttons
decrease_button = tk.Button(root, text="-", command=decrease_counter, bg="black", fg="white", bd=0, font=("Arial", 12), width=2)
decrease_button.place(relx=0.2, rely=0.5, anchor=tk.CENTER)

increase_button = tk.Button(root, text="+", command=increase_counter, bg="black", fg="white", bd=0, font=("Arial", 12), width=2)
increase_button.place(relx=0.8, rely=0.5, anchor=tk.CENTER)

# Bind the move window function to the root window
root.bind("<B1-Motion>", move_window)

# Prevent buttons from moving the window
decrease_button.bind("<B1-Motion>", lambda event: None)
increase_button.bind("<B1-Motion>", lambda event: None)

root.mainloop()
